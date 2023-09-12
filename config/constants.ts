export const Initials = {
  DefaultInterface: `// You can use typescript interfaces like following; 

    interface User {
      firstName: string;
      lastName: string;
      username: string;
      emailAddress: string;
    }
    `,

  DefaultMockResult: {
    firstName: 'Kenny',
    lastName: 'Goodwin',
    username: 'Jessie97',
    emailAddress: 'Agustina92@yahoo.com',
  },
};

export const RegexExp = {
  InterfaceName: /interface\s+(\w+)/g,
  Interface: /interface\s+(\w+)\s*{[^}]*}/gs,
};

export const Colors = {
  ChipClors: ['bg-primary', 'bg-secondary', 'bg-warning', 'bg-danger', 'bg-default'],
};
