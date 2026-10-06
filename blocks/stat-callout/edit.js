/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { stats } = attributes;
  const blockProps = useBlockProps();

  const updateStat = (index, field, value) => {
    const updatedStats = [...stats];

    updatedStats[index] = {
      ...updatedStats[index],
      [field]: value,
    };

    setAttributes({ stats: updatedStats });
  };

  const addStat = () => {
    setAttributes({
      stats: [
        ...stats,
        {
          number: "0",
          label: "New Stat",
        },
      ],
    });
  };
  const removeStat = (index) => {
    setAttributes({
      stats: stats.filter((_, statIndex) => statIndex !== index),
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Statistics", "fernwood-trail")}>
          {stats.map((stat, index) => (
            <div key={index}>
              <TextControl
                label={__("Number", "fernwood-trail")}
                value={stat.number}
                onChange={(value) => updateStat(index, "number", value)}
              />

              <TextControl
                label={__("Label", "fernwood-trail")}
                value={stat.label}
                onChange={(value) => updateStat(index, "label", value)}
              />

              <Button variant="secondary" onClick={() => removeStat(index)}>
                {__("Remove Stat", "fernwood-trail")}
              </Button>
            </div>
          ))}
          <Button variant="primary" onClick={addStat}>
            {__("Add Stat", "fernwood-trail")}
          </Button>
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {stats.map((stat, index) => (
          <div key={index}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
