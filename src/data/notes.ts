export type NoteSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Note = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  displayDate: string;
  readingTime: string;
  tags: string[];
  intro: string;
  sections: NoteSection[];
  takeaway: string;
};

export const notes: Note[] = [
  {
    slug: "map50-is-not-a-promise",
    title: "mAP@50 is not a promise: reading detection metrics before you ship",
    summary:
      "A detection model can score 95% mAP@50 and still fail the task it was built for. What the metric measures, what your pipeline actually needs, and why the gap matters.",
    date: "2026-08-18",
    displayDate: "18 August 2026",
    readingTime: "6 min read",
    tags: ["Computer vision", "Model evaluation", "Document AI"],
    intro:
      "On the document-intelligence system I built for my graduation project, the YOLO11 field detector reached 95.16% mAP@50, 68.45% mAP@75, and 62.69% mAP@50–95. Those three numbers describe the same model, and only one of them is the number people quote. Understanding why they diverge — and which of them the downstream pipeline actually cares about — changed how I evaluate detection models.",
    sections: [
      {
        heading: "What the spread actually measures",
        paragraphs: [
          "mAP@50 counts a prediction as correct when it overlaps the ground-truth box by at least 50%. mAP@75 raises that bar to 75%. mAP@50–95 averages the thresholds from 50% to 95% in steps, so it rewards boxes that are not just correct but tight.",
          "A large gap between mAP@50 and mAP@50–95 does not mean the model is missing objects. It means the model finds the right things and draws loose boxes around them. Those are different failures, and they cost different amounts depending on what happens next in the pipeline.",
        ],
      },
      {
        heading: "The downstream task decides which failure is expensive",
        paragraphs: [
          "In a form-processing pipeline, a detected field is not the output. It is a crop that gets handed to a recognition model. So the question is not 'how tight is this box' but 'does this crop contain everything the recognition model needs, and nothing that confuses it'.",
          "That reframing inverts the usual intuition. A box that is slightly too large is usually harmless — the recognition model sees the full field plus a little whitespace. A box that is tight enough to score well on mAP@75 but clips a descender, a decimal point, or the first character of a handwritten value is a silent data-corruption bug. It scores better and performs worse.",
        ],
        list: [
          "Loose box, full content: high recognition accuracy, low mAP@50–95.",
          "Tight box, clipped content: better mAP@50–95, corrupted downstream value.",
          "Missed field entirely: hurts every metric, and is the failure worth optimizing against.",
        ],
      },
      {
        heading: "What I measure instead",
        paragraphs: [
          "Detection metrics are a diagnostic, not an acceptance criterion. The acceptance criterion has to live at the end of the pipeline: for each field, did the system produce the value a human would have written down?",
          "That end-to-end field accuracy is harder to compute and much harder to argue with. It absorbs detection, classification, recognition, and business-rule resolution into a single number that maps to the operational problem — the reason the system was commissioned in the first place.",
          "Detection metrics still earn their place. They tell you where in the pipeline a regression came from. They just should not be the number on the slide.",
        ],
      },
      {
        heading: "A practical checklist",
        paragraphs: [
          "Before quoting a detection score, I now ask four questions.",
        ],
        list: [
          "Does the downstream consumer need tight boxes, or complete ones? Pad the crop if the answer is 'complete'.",
          "Which IoU threshold corresponds to a crop the recognition model can still read? That is your real threshold, not 0.5 by convention.",
          "What is the end-to-end accuracy per field type? Averages hide the one field that is failing 40% of the time.",
          "What happens to a field the model is unsure about? If the answer is 'nothing', the metric is describing a system nobody should deploy.",
        ],
      },
    ],
    takeaway:
      "Detection metrics measure the model. Field accuracy measures the system. Ship on the second one, debug with the first.",
  },
  {
    slug: "human-in-the-loop-is-a-product-decision",
    title: "Human-in-the-loop is a product decision, not a fallback",
    summary:
      "Routing low-confidence predictions to a human is the easy half. The hard half is designing the review step so it is faster than the manual process you replaced.",
    date: "2026-08-25",
    displayDate: "25 August 2026",
    readingTime: "5 min read",
    tags: ["Applied AI", "Human-in-the-loop", "Product engineering"],
    intro:
      "Every document-AI system eventually adds a human review step. It usually arrives as an engineering afterthought: the model is uncertain, so a person checks it. But if the review step is designed carelessly, it can make the whole system slower than the manual workflow it was meant to replace — while still costing you the model, the infrastructure, and the integration work.",
    sections: [
      {
        heading: "The failure mode nobody benchmarks",
        paragraphs: [
          "Consider a form with twenty fields. The model is confident about nineteen and unsure about one. If the review interface shows the reviewer the whole document and asks them to confirm it, you have not saved them anything: they will read all twenty fields, because they have no reason to trust the nineteen.",
          "The system's throughput is now bounded by human reading speed, exactly as before. The model's accuracy did not create the bottleneck. The interface did.",
        ],
      },
      {
        heading: "Review the field, not the document",
        paragraphs: [
          "The fix is to make the unit of review the smallest unit of uncertainty. Show the reviewer the one field the system is unsure about, with the cropped image beside the predicted value, and let them confirm or correct in a single action.",
          "This only works if the confidence signal is trustworthy at field granularity. That is a modeling requirement that comes directly from a product decision — which is the point. You cannot design the review step after the pipeline is built and expect it to fit.",
        ],
      },
      {
        heading: "Global thresholds are a shortcut you pay for",
        paragraphs: [
          "A single confidence threshold across all field types is convenient and almost always wrong. A checkbox and a handwritten reference number fail in different ways, at different rates, with different costs when they are wrong.",
          "Calibrating per field type takes more evaluation work, but it is what lets you route aggressively where the model is reliable and conservatively where it is not. The alternative is a threshold tuned to the worst field, which sends far too much to review, or tuned to the average, which lets real errors through.",
        ],
        list: [
          "Set thresholds from the cost of an error, not from a uniform confidence score.",
          "Track how often reviewers accept the prediction unchanged — a high acceptance rate on a field means the threshold is too conservative.",
          "Track corrections as labelled data. A review step that does not feed back into the dataset is throwing away the most valuable signal you have.",
        ],
      },
      {
        heading: "Corrections are the dataset you did not have to pay for",
        paragraphs: [
          "The reviewer is producing perfectly labelled examples of exactly the cases your model finds hard. That is the highest-value training data in the system, and it arrives free as a byproduct of normal operation.",
          "Capturing it requires deciding, up front, that the correction path writes somewhere structured — not just into the output record. It is a small architectural decision that determines whether the system improves over time or stays exactly as good as it was on launch day.",
        ],
      },
    ],
    takeaway:
      "Design the review step at the same time as the model. A human-in-the-loop system is a workflow with a model inside it, not a model with a workflow bolted on.",
  },
  {
    slug: "what-i-changed-after-my-first-rag-system",
    title: "What I changed after my first RAG system",
    summary:
      "Building a retrieval-augmented assistant for warehouse operations taught me that most of my problems were retrieval problems wearing a generation costume.",
    date: "2026-09-01",
    displayDate: "1 September 2026",
    readingTime: "6 min read",
    tags: ["RAG", "LLMs", "Vector search"],
    intro:
      "SmartWarehouse AI pairs a ChromaDB-backed retrieval layer with vision models and inventory data so that operators can ask questions about stock and movements in plain language. The first version worked in demos and disappointed under real questions. Almost every fix turned out to be upstream of the language model.",
    sections: [
      {
        heading: "I was debugging the wrong component",
        paragraphs: [
          "When an answer was wrong, my instinct was to change the prompt. That is the most visible lever and the least effective one. In practice, the majority of bad answers came from the model being handed passages that did not contain the answer — at which point no prompt saves you.",
          "The diagnostic that fixed my workflow was cheap: before looking at the generated answer, look at what was retrieved. If the answer is not in the retrieved context, the generation step is not the problem, and tuning it is wasted effort.",
        ],
      },
      {
        heading: "Chunk by answerable unit, not by document",
        paragraphs: [
          "My first chunking strategy split documents by length because that was the default. It produced chunks that started mid-table and ended mid-sentence, and embeddings for those chunks describe nothing in particular.",
          "Splitting instead along the natural boundaries of the content — one record, one procedure, one specification — produced chunks whose embedding actually corresponds to a question someone might ask. Retrieval quality improved more from this than from any model change I made.",
        ],
      },
      {
        heading: "You need an evaluation set before you need a better model",
        paragraphs: [
          "For an embarrassing amount of time, my evaluation process was asking the system questions I had thought of and judging the answers by eye. That method cannot detect a regression, and it flatters the system, because you unconsciously ask questions you know it handles.",
          "A modest set of twenty to thirty real questions with known correct answers is enough to change the character of the work. It turns 'this feels better' into 'retrieval hit rate went from 60% to 85%', and it makes it obvious when a change that improved one class of question broke another.",
        ],
        list: [
          "Measure retrieval separately from generation: did the right chunk make it into the context?",
          "Include questions the system should refuse — a RAG system that confidently answers from nothing is worse than one that says it does not know.",
          "Keep the questions from real users. The ones you invent are always the ones you already handle.",
        ],
      },
      {
        heading: "Grounding is a UI concern too",
        paragraphs: [
          "An answer that cites which record it came from is worth more to an operator than a better-worded answer that does not, because it is checkable. When the system is wrong, a citation turns a mysterious failure into an obvious one.",
          "That also changes the trust dynamic in the operator's favour. They stop asking 'is this thing right' and start asking 'is this source right', which is a question they are actually equipped to answer.",
        ],
      },
    ],
    takeaway:
      "Most RAG quality problems are retrieval problems. Instrument retrieval first, build an evaluation set early, and make every answer checkable.",
  },
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
