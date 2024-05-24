<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/** Enable W3 Total Cache */

/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'chicdressing' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']`_PyU5n,9XopsLCq_h*i7?h=M|$grLwrN$Gr3$eVOHbT+?~e}@}oF2X}S4dqp59' );
define( 'SECURE_AUTH_KEY',  'Vg+oZ~rHgZR+l`Rt*ReYoEA<3-JQeKQzJ9N[H-)riS4Nn6Q(O%O+1GZ#CsMd4:i<' );
define( 'LOGGED_IN_KEY',    'J/!+4 #+4tF,+0dL J|SYP6p]*7zs-]YT-Z<?x}$LU};xUoj-?!>GYYVW*I~h1T4' );
define( 'NONCE_KEY',        'p}^/cxWKZ9^eZ0zSO6 rv]aj`0]m%]22h)s+_;2{>La+S{(z[In5^=n(i5*Z`=BI' );
define( 'AUTH_SALT',        '6U6|w/XgN=p:p)`VM}0?cc)r/K0kkmBrae`^J.[c^HpxB4EWlNbM3hb<>b_&mcja' );
define( 'SECURE_AUTH_SALT', 'Q;yH>V;r}r2~H`;[;}q==/vMjsUQ@$6z8VQa9P2{6efsvfd>teU44/;t)x2vVr!~' );
define( 'LOGGED_IN_SALT',   '~AEykU|zTvyey Kpy;+CHuvW)J=VzQU FoWzvs]s~Sm2r)VlVpWrUo=. 6Kg-xIz' );
define( 'NONCE_SALT',       'bn+Vk%o1HoX &+0x:h2/?vCacOurIHojo(Hd&-C#5z$g-it;PvB7o?Lq2R8#X2?:' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
