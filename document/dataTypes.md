#Sequelize 数据结构

Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT
Sequelize.CITEXT                      // CITEXT      仅 PostgreSQL 和 SQLite.

Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)

Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 10)               // FLOAT(11,10)

Sequelize.REAL                        // REAL        仅 PostgreSQL.
Sequelize.REAL(11)                    // REAL(11)    仅 PostgreSQL.
Sequelize.REAL(11, 12)                // REAL(11,12) 仅 PostgreSQL.

Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 10)              // DOUBLE(11,10)

Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

Sequelize.DATE                        // mysql / sqlite 为 DATETIME, postgres 为带时区的 TIMESTAMP
Sequelize.DATE(6)                     // DATETIME(6) 适用 mysql 5.6.4+. 小数秒支持最多6位精度
Sequelize.DATEONLY                    // DATE 不带时间.
Sequelize.BOOLEAN                     // TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // 一个允许值为'value 1'和'value 2'的ENUM
Sequelize.ARRAY(Sequelize.TEXT)       // 定义一个数组. 仅 PostgreSQL.
Sequelize.ARRAY(Sequelize.ENUM)       // 定义一个ENUM数组. 仅 PostgreSQL.

Sequelize.JSON                        // JSON 列. 仅 PostgreSQL, SQLite 和 MySQL.
Sequelize.JSONB                       // JSONB 列. 仅 PostgreSQL.

Sequelize.BLOB                        // BLOB (PostgreSQL 为 bytea)
Sequelize.BLOB('tiny')                // TINYBLOB (PostgreSQL 为 bytea. 其余参数是 medium 和 long)

Sequelize.UUID                        // PostgreSQL 和 SQLite 的 UUID 数据类型,MySQL 的 CHAR(36) BINARY(使用defaultValue:Sequelize.UUIDV1 或 Sequelize.UUIDV4 来让 sequelize 自动生成 id).

Sequelize.CIDR                        // PostgreSQL 的 CIDR 数据类型
Sequelize.INET                        // PostgreSQL 的 INET 数据类型
Sequelize.MACADDR                     // PostgreSQL 的 MACADDR 数据类型

Sequelize.RANGE(Sequelize.INTEGER)    // 定义 int4range 范围. 仅 PostgreSQL.
Sequelize.RANGE(Sequelize.BIGINT)     // 定义 int8range 范围. 仅 PostgreSQL.
Sequelize.RANGE(Sequelize.DATE)       // 定义 tstzrange 范围. 仅 PostgreSQL.
Sequelize.RANGE(Sequelize.DATEONLY)   // 定义 daterange 范围. 仅 PostgreSQL.
Sequelize.RANGE(Sequelize.DECIMAL)    // 定义 numrange 范围. 仅 PostgreSQL.

Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // 定义 tstzrange 范围的数组. 仅 PostgreSQL.

Sequelize.GEOMETRY                    // Spatial 列. 仅 PostgreSQL (带有 PostGIS) 或 MySQL.
Sequelize.GEOMETRY('POINT')           // 带有 geometry 类型的 spatial 列. 仅 PostgreSQL (带有 PostGIS) 或 MySQL.
Sequelize.GEOMETRY('POINT', 4326)     // 具有 geometry 类型和 SRID 的 spatial 列. 仅 PostgreSQL (带有 PostGIS) 或 MySQL.
