<?php

namespace MediaWiki\HTMLForm\Field;

use MediaWiki\HTMLForm\HTMLFormActionFieldLayout;

/**
 * Creates a text input field with a button assigned to the input field.
 *
 * @stable to extend
 */
class HTMLTextFieldWithButton extends HTMLTextField {
	/** @var HTMLFormFieldWithButton */
	protected $mClassWithButton = null;

	/**
	 * @stable to call
	 * @inheritDoc
	 */
	public function __construct( $info ) {
		$this->mClassWithButton = new HTMLFormFieldWithButton( $info );
		parent::__construct( $info );
	}

	public function getInputHTML( $value ) {
		return $this->mClassWithButton->getElement( parent::getInputHTML( $value ) );
	}

	protected function getFieldLayoutOOUI( $inputField, $config ) {
		$buttonWidget = $this->mClassWithButton->getInputOOUI( '' );
		return new HTMLFormActionFieldLayout( $inputField, $buttonWidget, $config );
	}
}

/** @deprecated class alias since 1.42 */
class_alias( HTMLTextFieldWithButton::class, 'HTMLTextFieldWithButton' );
