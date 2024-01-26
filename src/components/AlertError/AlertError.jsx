import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function AlertError({ title, children }) {
  return (
    <>
      <div
        class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <ExclamationCircleIcon class="flex-shrink-0 inline w-5 h-5 me-3" />
        <span class="sr-only">Atenção!</span>
        <div>
          <span class="font-medium">{title}</span>
          {children}
        </div>
      </div>
    </>
  );
}
