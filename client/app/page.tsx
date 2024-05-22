export default async function Component() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="space-y-8 md:space-y-12 lg:space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            SupaUI Components
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
            A beautiful and accessible component library built on top of the
            shadcn UI library.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              About
            </h2>
            <div className="mt-4 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                SupaUI Components is a comprehensive library of beautifully
                designed and highly customizable UI components. Built on top of
                the powerful shadcn UI library, our components are accessible,
                responsive, and easy to integrate into your projects.
              </p>
              <p className="mt-4">
                Whether you&apos;re building a web application, a marketing
                site, or a mobile-first experience, SupaUI Components has the
                tools you need to create a stunning user interface. Our
                components are designed with best practices in mind, ensuring
                your users have a seamless and delightful experience.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Prerequisites
            </h2>
            <div className="mt-4 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                To use SupaUI Components, you&apos;ll need to have the following
                dependencies installed in your project:{" "}
                <strong className="">React, Tailwind CSS, shadcn/ui</strong> and{" "}
                <strong>React Icons</strong>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
