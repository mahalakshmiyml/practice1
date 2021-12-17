<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit03a9caef24529f33bc019be890fb9296
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit03a9caef24529f33bc019be890fb9296::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit03a9caef24529f33bc019be890fb9296::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit03a9caef24529f33bc019be890fb9296::$classMap;

        }, null, ClassLoader::class);
    }
}
