export const Initials = {
  DefaultInterface: `// You can use typescript interfaces like following; 

    interface Admin extends User {
      adminRecord: AdminRecord;
    }
    
    interface Student extends User {
      schoolRecord: SchoolRecord;
    }
    
    interface User {
      firstName: string;
      lastName: string;
      username: string;
      emailAddress: string;
    }
    
    interface AdminRecord {
      studentsPassedEachYear: number[];
    }
    
    interface SchoolRecord {
      startDate: string;
      endDate: string;
      isActive: boolean;
      grades: number[];
    }
    `,
};

export const RegexExp = {
  InterfaceName: /interface\s+(\w+)/g,
  Interface: /interface\s+(\w+)\s*{[^}]*}/gs,
};
