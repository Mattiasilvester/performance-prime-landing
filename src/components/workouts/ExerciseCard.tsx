
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ExerciseCardProps {
  exercise: {
    name: string;
    duration: string;
    rest: string;
    completed?: boolean;
  };
  onStart: (duration: string, rest: string) => void;
  onComplete: () => void;
  index?: number;
}

export const ExerciseCard = ({ exercise, onStart, onComplete, index = 0 }: ExerciseCardProps) => {
  return (
    <Card className="bg-black border-2 border-[#EEBA2B]">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4 h-20">
          <div className="flex items-start space-x-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h4 className="font-bold text-white text-lg leading-tight truncate mb-1">
                {exercise.name}
              </h4>
              <p className="text-sm text-white/70 truncate mb-2">
                {exercise.duration}
              </p>
              <p className="text-sm text-white/70 truncate">
                Riposo: {exercise.rest}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <Button
              onClick={() => onStart(exercise.duration, exercise.rest)}
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-xs h-8 min-w-[60px]"
            >
              Avvia
            </Button>
            <Button
              onClick={onComplete}
              size="sm"
              className="bg-[#EEBA2B] hover:bg-[#d4a61a] text-black px-3 py-2 text-xs font-medium h-8 whitespace-nowrap min-w-[75px]"
              disabled={exercise.completed}
            >
              Completa →
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
