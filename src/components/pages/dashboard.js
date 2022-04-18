import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AnnouncementSection from '../pages/AnnouncementSection';
import SidebarPage from '../pages/sidebar/SidebarPage';
import { useHistory } from 'react-router-dom';
import DashboardStyle from '../pages/styles/DashboardStyle.scss';

export default function Dashboard() {

  const history = useHistory();
  const tile1 = () => {
    history.push("/ViewAllUsers");
  }

  return (
		<div>
			<div>
				<SidebarPage />
				<h5>
					<strong>Hotel</strong>
				</h5>
			</div>
			<br />
			<br />
			<br />
			<div class="body">
				<div class="one">
					<Card style={{ backgroundColor: '#e00505' }}>
						<CardActionArea>
							<CardContent>
								<Typography>Hotel</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a style={{ color: 'white' }} href="/Announcement">
								<strong>Add</strong>
							</a>
						</CardActions>
					</Card>
					<br />
					<Card style={{ backgroundColor: '#4DD0A2' }}>
						<CardActionArea>
							<CardContent>
								<Typography>View All Users</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<br />
							<a style={{ color: 'white' }} href="/ViewAllUsers">
								<strong>List</strong>
							</a>
						</CardActions>
					</Card>
					<br />
				</div>
				<div class="two">
					<Card style={{ backgroundColor: '#4DB6AC' }}>
						<CardActionArea>
							<CardContent>
								<Typography>View Users</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a style={{ color: 'white' }} href="/#">
								<strong>View</strong>
							</a>
						</CardActions>
					</Card>
					<br />
					<Card style={{ backgroundColor: '#FFB74D' }}>
						<CardActionArea>
							<CardContent>
								<Typography>User Management</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a style={{ color: 'white' }} href="/#">
								<strong>View</strong>
							</a>
						</CardActions>
					</Card>
				</div>
				<div class="three">
					<AnnouncementSection />
				</div>
			</div>
		</div>
  );
}