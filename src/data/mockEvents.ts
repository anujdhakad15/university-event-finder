
export type EventType = 'hackathon' | 'workshop' | 'tech-talk' | 'career-fair' | 'conference';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string; // ISO string format
  endDate?: string; // ISO string format, for multi-day events
  location: string;
  college: string;
  eventType: EventType;
  link: string;
  image?: string;
}

// Mock data for events
export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'AI Innovation Hackathon',
    description: 'Join us for a 48-hour hackathon focused on creating innovative AI solutions. Open to all skill levels.',
    date: '2025-05-15T09:00:00Z',
    endDate: '2025-05-17T18:00:00Z',
    location: 'Computer Science Building, MIT',
    college: 'Massachusetts Institute of Technology',
    eventType: 'hackathon',
    link: 'https://example.com/ai-hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Introduction to Blockchain Workshop',
    description: 'Learn the fundamentals of blockchain technology and create your first smart contract in this hands-on workshop.',
    date: '2025-05-20T14:00:00Z',
    endDate: '2025-05-20T18:00:00Z',
    location: 'Engineering Hall, Stanford University',
    college: 'Stanford University',
    eventType: 'workshop',
    link: 'https://example.com/blockchain-workshop',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
  },
  {
    id: '3',
    name: 'Future of Quantum Computing',
    description: 'A technical talk by Dr. Sarah Johnson on the latest advancements in quantum computing and what it means for the future.',
    date: '2025-05-23T16:00:00Z',
    location: 'Physics Auditorium, Caltech',
    college: 'California Institute of Technology',
    eventType: 'tech-talk',
    link: 'https://example.com/quantum-tech-talk',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '4',
    name: 'Spring Technology Career Fair',
    description: 'Connect with top technology companies recruiting for internships and full-time positions.',
    date: '2025-06-01T10:00:00Z',
    endDate: '2025-06-01T17:00:00Z',
    location: 'Student Union, Berkeley',
    college: 'University of California, Berkeley',
    eventType: 'career-fair',
    link: 'https://example.com/spring-career-fair',
    image: 'https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '5',
    name: 'Data Science Bootcamp',
    description: 'Intensive 3-day bootcamp covering data analysis, machine learning, and data visualization tools and techniques.',
    date: '2025-06-05T09:00:00Z',
    endDate: '2025-06-07T17:00:00Z',
    location: 'Data Science Lab, Harvard University',
    college: 'Harvard University',
    eventType: 'workshop',
    link: 'https://example.com/data-science-bootcamp',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '6',
    name: 'Cybersecurity Conference',
    description: 'Annual conference featuring keynote speakers, workshops, and networking opportunities in the field of cybersecurity.',
    date: '2025-06-15T08:00:00Z',
    endDate: '2025-06-17T18:00:00Z',
    location: 'Technology Center, Princeton University',
    college: 'Princeton University',
    eventType: 'conference',
    link: 'https://example.com/cyber-conference',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '7',
    name: 'Web Development 101',
    description: 'Learn the basics of HTML, CSS, and JavaScript in this beginner-friendly workshop.',
    date: '2025-06-22T13:00:00Z',
    endDate: '2025-06-22T17:00:00Z',
    location: 'Computer Lab, Carnegie Mellon University',
    college: 'Carnegie Mellon University',
    eventType: 'workshop',
    link: 'https://example.com/web-dev-workshop',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '8',
    name: 'Innovation in Robotics',
    description: 'Dr. Robert Chen presents the latest innovations in robotics and artificial intelligence.',
    date: '2025-06-28T15:00:00Z',
    location: 'Engineering Building, Cornell University',
    college: 'Cornell University',
    eventType: 'tech-talk',
    link: 'https://example.com/robotics-talk',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1506&q=80',
  },
];
