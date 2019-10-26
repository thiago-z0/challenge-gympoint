import Plan from '../models/Plan';
import * as Yup from 'yup';

class PlansController {
  async index(req,res) {

    const plans = await Plan.findAll({
      attributes: ['id','title', 'duration', 'price'],
    });
    return res.json(plans);
  }

  async store(req,res) {

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    })

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json( { error: 'validation fails.' });
    }

    const { title, duration, price } = req.body;

    const planExist = await Plan.findOne({ where: {
      title: req.body.title,
    }});

    if(planExist) {
      res.status(400).json({ error: 'Plan already exixts' })
    };

    const plan = await Plan.create({
      title,
      duration,
      price
    });

    return res.json(plan);
  }

  async update(req,res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json( { error: 'validation fails.' });
    };

    const plan = await Plan.findByPk(req.params.id);

    const { title, price, duration } = await plan.update(req.body);


    return res.json({
      title,
      duration,
      price
    });
  }

  async delete(req,res) {

    const plan = await Plan.findByPk(req.params.id);

    if(plan) {
      const deleting = await plan.destroy();
    } else {
      res.status(400).json({ error: 'Plan does not exists.' });
    };



    const plans = await Plan.findAll({
      attributes: ['id','title', 'duration', 'price'],
    });


    return res.json(plans);
  }

}

export default new PlansController();
