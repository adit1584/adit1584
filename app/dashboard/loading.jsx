import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-lg bg-slate-700" />
            <Skeleton className="h-8 w-48 bg-slate-700" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-24 bg-slate-700" />
            <Skeleton className="h-10 w-24 bg-slate-700" />
            <Skeleton className="h-10 w-20 bg-slate-700" />
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20 bg-slate-600" />
                    <Skeleton className="h-8 w-16 bg-slate-600" />
                  </div>
                  <Skeleton className="h-8 w-8 bg-slate-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-full bg-slate-700" />
          <div className="grid gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-10 w-10 rounded-lg bg-slate-600" />
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-32 bg-slate-600" />
                        <Skeleton className="h-4 w-48 bg-slate-600" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-6 w-16 bg-slate-600" />
                      <div className="text-right space-y-1">
                        <Skeleton className="h-4 w-24 bg-slate-600" />
                        <Skeleton className="h-3 w-20 bg-slate-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
