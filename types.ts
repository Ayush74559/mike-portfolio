import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface InsightCard {
  title: string;
  content: string;
  icon: React.ElementType;
}

export interface ServiceItem {
  title: string;
  desc: string;
}