import { Skeleton } from "@/components/ui/skeleton";

const AboutMeSkeleton = () => (
  <div className="container mx-auto px-4 py-16 space-y-4">
    <Skeleton className="h-8 w-48 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="h-64 w-full" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  </div>
);

const SkillsSkeleton = () => (
  <div className="container mx-auto px-4 py-16 space-y-4 bg-secondary">
    <Skeleton className="h-8 w-48 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-2 w-full" />
        </div>
      ))}
    </div>
  </div>
);

const ServicesSkeleton = () => (
  <div className="container mx-auto px-4 py-16 space-y-4">
    <Skeleton className="h-8 w-48 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-40 w-full" />
      ))}
    </div>
  </div>
);

const ProjectsSkeleton = () => (
  <div className="container mx-auto px-4 py-16 space-y-4">
    <Skeleton className="h-8 w-48 mx-auto" />
    <Skeleton className="h-64 w-full" />
  </div>
);

const TestimonialsSkeleton = () => (
  <div className="container mx-auto px-4 py-16 space-y-4">
    <Skeleton className="h-8 w-48 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-40 w-full" />
      ))}
    </div>
  </div>
);

const ContactSkeleton = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container px-4 md:px-6">
      <div className="w-full max-w-3xl mx-auto shadow-lg">
        <div className="text-center pb-8 pt-10">
          <Skeleton className="h-8 w-48 mx-auto mb-2" />
          <Skeleton className="h-6 w-64 mx-auto" />
        </div>
        <div className="grid gap-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
export {
  ContactSkeleton,
  TestimonialsSkeleton,
  ProjectsSkeleton,
  ServicesSkeleton,
  SkillsSkeleton,
  AboutMeSkeleton,
};
