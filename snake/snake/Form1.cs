namespace snake
{
    public partial class Form1 : Form
    {
        int headX = 100;
        int headY = 100;
        int directionX = 1;
        int directionY = 0;

        int stepcounter = 0;
        int snakelength = 5;

        List<SnakeSegment> snake = new List<SnakeSegment>();

        public Form1()
        {
            InitializeComponent();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            headX += directionX * SnakeSegment.SnakeSegmentSize;
            headY += directionY * SnakeSegment.SnakeSegmentSize;

            var newHead = new SnakeSegment(stepcounter)
            {
                Top = headY,
                Left = headX,
            };

            foreach (var segment in snake)
            {
                if (segment.Top == headY && segment.Left == headX)
                {
                    timer1.Enabled = false;
                }
            }
            //farokvágás
            if (snake.Count()>snakelength)
            {
                var farok = snake.First();
                snake.Remove(farok);
                Controls.Remove(farok);
            }
            

            Controls.Add(newHead);
            snake.Add(newHead);

            stepcounter++;

            if (stepcounter%5==0)
            {
                snakelength++;
            }
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Up)
            {
                directionX = 0;
                directionY = -1;
            }
            if (e.KeyCode == Keys.Down)
            {
                directionX = 0;
                directionY = 1;
            }
            if (e.KeyCode == Keys.Left)
            {
                directionX = -1;
                directionY = 0;
            }
            if (e.KeyCode == Keys.Right)
            {
                directionX = 1;
                directionY = 0;
            }
        }
    }
}