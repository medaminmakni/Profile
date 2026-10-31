import { redirect } from "next/navigation";
import { profile } from "@/data/portfolio";

// Keep existing /cv links pointed at the approved downloadable CV.
export default function CvPage() {
  redirect(profile.cv.path);
}
