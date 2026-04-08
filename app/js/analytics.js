/**
 * Vercel Web Analytics Integration
 * 
 * This module initializes Vercel Web Analytics for the QOOL Quiz application.
 * Analytics will track page views and user interactions automatically once initialized.
 */

import { inject } from '../../node_modules/@vercel/analytics/dist/index.mjs';

// Initialize Vercel Analytics
// This will start tracking page views and events
inject();
