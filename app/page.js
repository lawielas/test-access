// import {AccessButton} from 'accessibility-toolkit'
import { AccessibilityProvider, AccessibilityButton } from 'accessibility-toolkit';

export default function Home() {
  return (
    <AccessibilityProvider>
      <AccessibilityButton />
      <main>
        <h1>Welcome to the Accessibility Toolkit!</h1>
        <p>
          This page demonstrates how to make your web application more accessible to people
          with different needs.
        </p>
        <a href="#">Learn more</a>
      </main>
    </AccessibilityProvider>
  );
}
