import { RegexExp } from '@/config/constants';

export const extractInterfaceNames = (code: string): string[] => {
  const matches = code.match(RegexExp.InterfaceName);

  return matches ? matches.map(match => match.split(' ')[1]) : [];
};
