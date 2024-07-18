import { AppErrorBoundary } from './components/ErrorBoundary';
import { AppRoutes } from './pages';
import { GlobalStyles } from './theme';

const App = () => (
  <AppErrorBoundary>
    <AppRoutes />
    <GlobalStyles />
  </AppErrorBoundary>
);

export default App;
