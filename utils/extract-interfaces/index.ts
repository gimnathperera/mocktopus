import { RegexExp } from '@/config/constants';

export const extractInterfaces = (templateString: string): string => {
  const matches = templateString.match(RegexExp.Interface);

  if (!matches) {
    return '';
  }

  const cleanedInterfaces = matches.map(match => match.trim()).join('\n\n');

  return `\`${cleanedInterfaces}\``;
};
