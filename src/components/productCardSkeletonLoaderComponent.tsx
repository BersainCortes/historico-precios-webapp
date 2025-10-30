export default function ProductCardSkeletonLoaderComponent() {
    return (
        <div
            className="bg-slate-800 rounded-2xl p-5 shadow-md shadow-slate-900/40"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="h-5 w-16 bg-slate-700/60 rounded-full animate-pulse"></div>
                <div className="h-5 w-20 bg-slate-700/60 rounded-full animate-pulse"></div>
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-slate-700/60 rounded-full animate-pulse"></div>
                <div className="flex-1 h-5 bg-slate-700/60 rounded animate-pulse"></div>
            </div>

            <div className="h-9 w-full bg-slate-700/60 rounded-xl animate-pulse"></div>
        </div>
    );
}