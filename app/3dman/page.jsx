'use client';

import Form from '@/app/components/Form';
import ThreeDHuman from '@/app/components/ThreeDHuman';

export default function FormPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center bg-gray-50 p-6 gap-10">
      {/* 3D Human Side */}
      <div className="w-full md:w-1/2 h-[500px]">
        <ThreeDHuman />
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2">
        <Form />
      </div>
    </div>
  );
}
