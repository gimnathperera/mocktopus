'use client';
import { FC } from 'react';

const Result: FC = () => {
  return (
    <div className='bg-[#1E1E1E] rounded-lg py-2 px-8 w-1/2'>
      <div className='h-full overflow-auto'>
        <code>
          {`[
        {
          subject: 'admin_users',
          label: 'Admin Users',
          group: 'Admin Management',
        },
        {
          subject: 'admin_users',
          label: 'Admin Users',
          group: 'Admin Management',
        },
       
      ]`}
        </code>
      </div>
    </div>
  );
};

export default Result;
