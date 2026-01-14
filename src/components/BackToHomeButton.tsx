import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BackToHomeButtonProps {
  className?: string;
}

function BackToHomeButton({ className = '' }: BackToHomeButtonProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

export default BackToHomeButton;

