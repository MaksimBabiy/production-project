import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundariesProps {
  children: ReactNode;
}
interface ErrorBoundariesState {
  hasError: boolean;
}
class ErrorBoundaries extends React.Component<
  ErrorBoundariesProps,
  ErrorBoundariesState
> {
  constructor(props: ErrorBoundariesProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundaries;
