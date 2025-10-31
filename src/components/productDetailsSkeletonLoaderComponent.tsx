export default function ProductDetailsSkeletonLoaderComponent() {
    return (
        <div className="bg-slate-800 rounded-2xl shadow-md shadow-slate-900/50 p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="h-6 w-48 bg-slate-700/60 rounded animate-pulse"></div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                    <div className="h-5 w-20 bg-slate-700/60 rounded animate-pulse"></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                    <div className="h-5 w-36 bg-slate-700/60 rounded animate-pulse"></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-slate-500 rounded-full animate-pulse"></div>
                    <div className="h-5 w-24 bg-slate-700/60 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}