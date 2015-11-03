<?php
/**
 * Created by PhpStorm.
 * User: onysko
 * Date: 02.11.2015
 * Time: 17:29
 */

namespace samsoncms\input\url;

use \samsoncms\input\Field;

class Url extends Field
{
    /** Database object field name */
    protected $param = 'Value';

    /** Special CSS classname for nested field objects to bind JS and CSS */
    protected $cssClass = '__unique_url';

    /**
     * Function to render inner object
     *
     * @param Application $renderer Renderer object
     * @return string HTML string
     */
    protected function viewField($renderer)
    {
        return $renderer->view($this->fieldView)
            ->set('fieldId', 'url_material_' . $this->dbObject->id)
            ->set('value', $this->value())
            ->output();
    }
}
