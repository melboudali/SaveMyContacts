import React, { useContext, Fragment } from "react";
import Context from "../Context/Context/Context";
import ContactItem from "./ContactItem";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Contacts = () => {
  const context = useContext(Context);
  const { contacts } = context;
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item xs={8} sm={8} md={4} lg={4} xl={4}>
          <Paper elevation={3}>
            {/* AddContact */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quidem, accusamus, cumque exercitationem praesentium hic
              cupiditate maiores harum, obcaecati dolorum deleniti quod error
              dolorem sit ad recusandae magni expedita dolor vitae ullam
              voluptate odio? Et vitae, nam voluptatum a vel voluptatem. A
              nostrum nam doloremque omnis illum, necessitatibus mollitia
              repudiandae, alias quas inventore asperiores labore fuga eaque
              incidunt quibusdam cumque, sit odit ab maiores. Soluta eum tempora
              maiores deserunt error velit, dolorum saepe hic maxime commodi
              architecto a nisi? Sapiente molestias similique, sunt quis, rem
              beatae iusto commodi, odio alias est soluta exercitationem nemo?
              Eligendi doloribus quam fugiat reprehenderit voluptates ipsum
              voluptatum corporis omnis nostrum, natus, minus expedita animi
              quaerat ut dicta esse laudantium? Doloribus sint delectus facilis
              vitae, officiis laudantium ipsum maxime modi quos cupiditate neque
              dignissimos incidunt aliquam harum quo vero nisi aspernatur
              laboriosam aperiam voluptates repellat distinctio culpa? Nam
              aliquam, voluptas mollitia repudiandae iure molestias consequatur.
              Mollitia, voluptatum quam sed rerum quia incidunt natus et
              blanditiis. Id praesentium necessitatibus pariatur saepe incidunt
              debitis quis quos? Quasi quibusdam beatae exercitationem
              voluptatum, neque architecto dolorem minus, suscipit reiciendis
              praesentium, doloremque facilis corporis? Quam et, magnam
              temporibus animi at magni iste aliquid quas voluptatibus nisi
              adipisci qui non eum quasi!
            </p>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={4}>
            {/* Contacts List */}
            {contacts.map(c => (
              <ContactItem key={c.id} contact={c} />
            ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Contacts;
