"""init

Revision ID: b03c094694f8
Revises: 
Create Date: 2023-02-24 18:29:50.620453

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b03c094694f8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'employees',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String, nullable=False),
        sa.Column('surname', sa.String, nullable=False),
    )


def downgrade() -> None:
    op.drop_table('employees')
