import { CourseDetails } from '@/components/courses/CourseDetails';

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CourseDetails courseId={resolvedParams.id} />;
}
