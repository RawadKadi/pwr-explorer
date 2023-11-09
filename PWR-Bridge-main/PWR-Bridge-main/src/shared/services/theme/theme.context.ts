import { createContext } from 'react';

import ThemeService from './theme.service';

const def = new ThemeService();

const ThemeSvcContext = createContext<ThemeService>(def);

export default ThemeSvcContext;
