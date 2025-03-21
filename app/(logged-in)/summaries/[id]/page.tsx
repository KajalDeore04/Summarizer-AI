import BgGradient from "@/components/common/bg-gradient";
import SourceInfo from "@/components/summaries/source-info";
import SummaryHeader from "@/components/summaries/summary-header";
import SummaryViewer from "@/components/summaries/summary-viewer";
import { getSummaryById } from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const id = params.id;

  const summary = await getSummaryById(id);

  if (!summary) {
    notFound();
  }

  const {
    title,
    summary_text,
    file_name,
    word_count,
    created_at,
    original_file_url,
  } = summary;
  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative isolate min-h-screen bg-linear-to-b from-rose-100/60 to-white">
      <BgGradient className="from-rose-400 via-rose-200 to-orange-200" />
      <div className="conatiner mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <div className="flex flex-col">
            <SummaryHeader
              title={title}
              createdAt={created_at}
              readingTime={readingTime}
            />
          </div>
          {file_name && (
            <SourceInfo
              fileName={file_name}
              title={title}
              summaryText={summary_text}
              createdAt={created_at}
              originalFileUrl={original_file_url}
            />
          )}
        </div>
       
        
           

            <div className="relative mt-8 sm:mt-6 flex justify-center ">
              <SummaryViewer summary={summary_text} />
            </div>
          </div>
        </div>
     
   
  );
}
