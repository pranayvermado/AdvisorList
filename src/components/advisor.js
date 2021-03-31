import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Avatar, Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "15px",
  },

  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  title: {
    color: "aqua",
    padding: "5px 0px 0px 15px",
    fontWeight: "500",
    textAlign: "left",
  },
  actionButton: {
    backgroundColor: "aqua",
    color: "#ffffff",
    margin: "0px 105px 13px 5px",
    minWidth: "130px",
  },
  disabledButton: {
    backgroundColor: "grey",
    opacity: "0.5",
    color: "#ffffff",
  },
  rates: {
    fontWeight: "500",
    color: "#000000",
    marginBottom: "3px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Advisor = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionDesktop}>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid item xs={8} style={{ display: "flex" }}>
              <Grid item xs={4}>
                <Avatar
                  alt="Contact Person"
                  src={`/asset/images/${props.advisorData.imageUrl}`}
                  className={classes.large}
                />
              </Grid>
              <Grid item xs={8} className={classes.title}>
                {props.advisorData.title || "title"}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12} className={classes.rates}>
                {`${props.advisorData.rates}/min`}
              </Grid>
              <Grid item xs={12}>
                <Button
                  {...(props.advisorData.isCallNowDisabled && {
                    disabled: true,
                  })}
                  classes={{ disabled: classes.disabledButton }}
                  className={classes.actionButton}
                  startIcon={<CallIcon />}
                >
                  Call Now
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.actionButton}
                  {...(props.advisorData.isChatDisbaled && { disabled: true })}
                  classes={{ disabled: classes.disabledButton }}
                  startIcon={<ChatIcon />}
                >
                  Chat Later
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.sectionMobile}>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Grid item xs={8} style={{ display: "flex" }}>
              <Grid item xs={4}>
                <Avatar
                  alt="Contact Person"
                  src={`/asset/images/${props.advisorData.imageUrl}`}
                  className={classes.large}
                />
              </Grid>
              <Grid item xs={8} className={classes.title}>
                {props.advisorData.title || "title"}
              </Grid>
            </Grid>
            <Grid item xs={4} style={{ display: "flex" }}>
              <Grid item xs={12}>
                <Button
                  {...(props.advisorData.isCallNowDisabled && {
                    disabled: true,
                  })}
                  classes={{ disabled: classes.disabledButton }}
                  className={classes.actionButton}
                  startIcon={<CallIcon />}
                >
                  Call Now
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.actionButton}
                  {...(props.advisorData.isChatDisbaled && { disabled: true })}
                  classes={{ disabled: classes.disabledButton }}
                  startIcon={<ChatIcon />}
                >
                  Chat Later
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <hr></hr>
    </>
  );
};

export default Advisor;
