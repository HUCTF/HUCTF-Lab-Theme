import click
from Lab import app, db
from Lab.models import Admin

@app.cli.command()
@click.option('--drop', is_flag=True, help='Create after drop.')
def initdb(drop):
    """Initialize the database."""
    if drop:
        click.confirm('This operation will delete the database, do you want to continue?', abort=True)
        db.drop_all()
        click.echo('Drop tables.')
    db.create_all()
    click.echo('Initialized database.')

# @app.cli.command()
# @click.option('--count', default=20, help='Quantity of messages, default is 20.')
# def forge(count):
#     '''
#     Generate fake messages.
#     :param count: how many messages?
#     :return:
#     '''
#     from faker import Faker
#
#     db.drop_all()
#     db.create_all()
#
#     fake = Faker()
#     click.echo('Working...')
#     for i in range(count):
#         message = Admin(username='bob',
#                         timestamp=fake.date_time_this_year(),
#                         title=fake.text(20),
#                         body=fake.text(600),
#         )
#         message.set_password('1234qwer')
#         db.session.add(message)
#     db.session.commit()
#     click.echo('Created %d fake messages.' % count)


@app.cli.command()
# @click.option('--count', default=20, help='Quantity of messages, default is 20.')
def admin():
    admin = Admin(
        username='admin',
        # title='hello',
        # blog_sub_title="No, I'm the real thing.",
        # name='Mima Kirigoe',
        # body='Um, l, Mima Kirigoe, had a fun time as a member of CHAM...'
    )
    admin.set_password('helloflask')
    db.session.add(admin)
    db.session.commit()
    click.echo('Admin Created Success.')
