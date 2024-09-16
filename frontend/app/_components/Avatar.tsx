export default function Avatar({ initials } : { initials: string}) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
      <span className="font-medium text-gray-50 dark:text-gray-300">{initials}</span>
    </div>
  )
}