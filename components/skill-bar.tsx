import { Card, CardContent } from '@/components/ui/card'

interface SkillBarProps {
  name: string
  level: number
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">{name}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

