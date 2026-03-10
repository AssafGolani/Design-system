import { Meta, StoryObj } from '@storybook/angular';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from 'ds';

const meta: Meta = {
  title: 'Components/Accordion',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnAccordionImports, HlmAccordionImports],
    template: `
      <div brnAccordion hlmAccordion class="w-full max-w-lg">
        <div brnAccordionItem hlmAccordionItem>
          <button brnAccordionTrigger hlmAccordionTrigger>
            Is it accessible?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="h-4 w-4 shrink-0 transition-transform duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div brnAccordionContent hlmAccordionContent>
            <div class="pb-4 pt-0">Yes. It adheres to the WAI-ARIA design pattern.</div>
          </div>
        </div>
        <div brnAccordionItem hlmAccordionItem>
          <button brnAccordionTrigger hlmAccordionTrigger>
            Is it styled?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="h-4 w-4 shrink-0 transition-transform duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div brnAccordionContent hlmAccordionContent>
            <div class="pb-4 pt-0">Yes. It comes with default styles that match the design system.</div>
          </div>
        </div>
        <div brnAccordionItem hlmAccordionItem>
          <button brnAccordionTrigger hlmAccordionTrigger>
            Is it animated?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="h-4 w-4 shrink-0 transition-transform duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div brnAccordionContent hlmAccordionContent>
            <div class="pb-4 pt-0">Yes. It's animated by default, but you can disable it if you prefer.</div>
          </div>
        </div>
      </div>
    `,
  }),
};
