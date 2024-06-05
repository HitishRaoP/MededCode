import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type StatsProps = {
    title: string
    value: string | undefined
    children?: React.ReactNode
}
export function Stats({
    title,
    value,
    children }: StatsProps) {
    return (
        <Card>
            <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-blue-800">{value}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>

    )
}
