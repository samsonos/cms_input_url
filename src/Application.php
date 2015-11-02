<?php
/**
 * Created by PhpStorm.
 * User: onysko
 * Date: 02.11.2015
 * Time: 17:29
 */

namespace samsoncms\input\url;


class Application extends \samsoncms\input\Application
{
    public static $type = 12;

    /** @var string SamsonCMS field class */
    protected $fieldClass = '\samsoncms\input\url\Url';
}
