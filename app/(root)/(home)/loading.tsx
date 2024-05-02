import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-red-200/20" />
        <div className="mt-12 grid w-full flex-wrap grid-cols-1 md:grid-cols-3 justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" />
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" />
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" /> 
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" /> 
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" /> 
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" /> 
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-red-200/20" /> 
        </div>
      </section>
    </main>
  )
}

export default loading;