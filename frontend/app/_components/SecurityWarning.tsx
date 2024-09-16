export default function SecurityWarning() {
  return (
    <div id="email-explanation" className="text-pretty max-w-md text-sm text-gray-500 dark:text-gray-400">
      <p className="text-red-800">{`Attention !`}</p>
      <p>{`Aucun système d'authentification fiable n'est actuellement en place.`}</p>
      <p>{`Les données sont `} <u>{`envoyées et stockées en clair`}</u>.</p>
    </div>
  )
}