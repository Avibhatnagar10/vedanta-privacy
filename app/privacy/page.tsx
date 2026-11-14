import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { PolicyExperience } from './PolicyExperience';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for Vedanta Systems Admin and Vedanta Systems Staff.',
};

export default function PrivacyPage() {
  return <><Header /><PolicyExperience /><Footer /></>;
}
