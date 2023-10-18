import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="gap-6">
            <h1 className="text-5xl font-semibold">Oops!</h1>
            <h2 className="text-3xl">404 page (not found page)</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;