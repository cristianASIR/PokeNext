var sleep = function(ms){ return new Promise(resolve => setTimeout(resolve, ms)); };
export default function Page() {
    return (
        <>
        {sleep(3000)}
        </>
    );
}