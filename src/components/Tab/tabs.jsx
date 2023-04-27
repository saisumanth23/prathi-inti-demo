import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function CustomTabs(props) {
  //const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { tabs } = props;

  return (
    <div style={{flexGrow: 1}}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
}

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
};

export default CustomTabs;
