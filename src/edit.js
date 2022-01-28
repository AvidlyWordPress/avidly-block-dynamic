/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { content },
		setAttributes,
		className,
	} = props;

	const blockProps = useBlockProps();

	// Change content.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<div { ...useBlockProps() }>
			<h2 className="mt-0">{ __( 'Avidly Block – add or edit text below!', 'avidly-block-dynamic' ) }</h2>
			
			<RichText
                { ...blockProps }
                tagName="p"
				value={ content }
                onChange={ onChangeContent }
				placeholder={ __( 'Add your own text here.', 'avidly-block-dynamic' ) }
            />
		</div>
	);
}
