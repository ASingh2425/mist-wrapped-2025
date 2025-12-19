
export interface WrappedData {
  hero: {
    title: string;
    subtitle: string;
    subtext: string;
  };
  community: {
    totalMembers: number;
    activeContributors: number;
    eventsConducted: number;
  };
  topDomains: string[];
  personality: {
    ctfs: number;
    writeups: number;
    tools: number;
    description: string;
  };
  securityAge: {
    age: number;
    description: string;
  };
  vulnerabilities: {
    title: string;
    description: string;
    color: string;
  }[];
  tools: {
    name: string;
    tagline: string;
    color: string;
  }[];
  impact: {
    workshops: number;
    recruitments: number;
    challenges: number;
    reach: string;
  };
}
