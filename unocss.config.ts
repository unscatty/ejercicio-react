import { presetForms } from '@julr/unocss-preset-forms';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetForms(),
    presetWind(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'prose',
    'prose-sm',
    'm-auto',
    'text-left',
  ],
});
