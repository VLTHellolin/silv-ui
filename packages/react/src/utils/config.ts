import type { Config } from './../types';
import { loadConfig } from 'c12';

export const { config } = await loadConfig<Config>({ name: 'silv' });
