import * as React from 'react';

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet,
} from '@fluentui/react-docsite-components';

import { AreaChartBasicExample } from './AreaChart.Basic.Example';
import { AreaChartMultipleExample } from './AreaChart.Multiple.Example';
import { AreaChartStyledExample } from './AreaChart.Styled.Example';
import { AreaChartCustomAccessibilityExample } from './AreaChart.CustomAccessibility.Example';

const AreaChartBasicExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Basic.Example.tsx') as string;
const AreaChartMultipleExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Multiple.Example.tsx') as string;
const AreaChartStyledExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Styled.Example.tsx') as string;
const AreaChartCustomAccessibilityExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.CustomAccessibility.Example.tsx') as string;

export class AreaChart extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Area Chart"
        componentName="AreaChartBasicExample"
        exampleCards={
          <div>
            <ExampleCard title="Area Chart basic" code={AreaChartBasicExampleCode}>
              <AreaChartBasicExample />
            </ExampleCard>
            <ExampleCard title="Multiple Area chart" code={AreaChartMultipleExampleCode}>
              <AreaChartMultipleExample />
            </ExampleCard>
            <ExampleCard title="Styled Area chart" code={AreaChartStyledExampleCode}>
              <AreaChartStyledExample />
            </ExampleCard>
            <ExampleCard title="Area chart custom Accessibility" code={AreaChartCustomAccessibilityExampleCode}>
              <AreaChartCustomAccessibilityExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/AreaChart/AreaChart.types.ts'),
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/CommonComponents/CartesianChart.types.ts'),
            ]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
        overview={
          <div>
            <p>
              Area charts depict a time-series relationship. But unlike line charts, they can also visually represent
              volume. Information is graphed on two axes, using data points connected by line segments. The area between
              the axis and this line is commonly emphasized with color or shading for legibility. Most often area charts
              compare two or more categories. The area chart is a highly performant visual. It uses a path based
              rendering mechanism to render the area component. On hovering, the nearest x datapoint is identified and
              the corresponding point is hovered.
            </p>
            <h3>Area chart variants</h3>
            <h4>Stacked area chart</h4>
            <p>
              In stacked area chart, two or more data series are stacked vertically. It helps in easy comparison across
              different dimensions. The callout on hover for stacked chart displays multiple values from the stack. The
              callout can be customized to show single values or stacked values. Refer to the props
              <code>onRenderCalloutPerDataPoint and onRenderCalloutPerStack</code> using which custom content for the
              callout can be defined.
            </p>
            <h4>Custom accessibility</h4>
            <p>
              Area chart provides a bunch of props to enable custom accessibility messages. Use
              <code>xAxisCalloutAccessibilityData</code>
              and <code>callOutAccessibilityData</code> to configure x axis and y axis accessibility messages
              respectively.
            </p>
          </div>
        }
      />
    );
  }
}
